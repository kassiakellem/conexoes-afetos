"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, type PanInfo } from "framer-motion"
import {
  Sparkles,
  Heart,
  Brain,
  Coffee,
  ThumbsUp,
  ThumbsDown,
  BookmarkPlus,
  ArrowLeft,
  Flame,
  Zap,
  Shuffle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { generateQuestions, generateChallenges } from "@/lib/question-generator"

// Question categories with their respective icons and colors
const categories = [
  { id: "casual", name: "Casual", icon: <Coffee className="h-6 w-6 mb-2" />, color: "from-blue-500/20 to-blue-600/10" },
  {
    id: "fun",
    name: "Divertidas",
    icon: <Sparkles className="h-6 w-6 mb-2" />,
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    id: "deep",
    name: "Profundas",
    icon: <Brain className="h-6 w-6 mb-2" />,
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    id: "romantic",
    name: "Românticas",
    icon: <Heart className="h-6 w-6 mb-2" />,
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    id: "erotic",
    name: "Picantes",
    icon: <Flame className="h-6 w-6 mb-2" />,
    color: "from-red-500/20 to-red-600/10",
  },
  {
    id: "challenge",
    name: "Desafios",
    icon: <Zap className="h-6 w-6 mb-2" />,
    color: "from-emerald-500/20 to-emerald-600/10",
  },
]

// Challenge subcategories
const challengeSubcategories = [
  {
    id: "all",
    name: "Todos os Desafios",
    icon: <Shuffle className="h-6 w-6 mb-2" />,
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    id: "casual",
    name: "Desafios Casuais",
    icon: <Coffee className="h-6 w-6 mb-2" />,
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: "fun",
    name: "Desafios Divertidos",
    icon: <Sparkles className="h-6 w-6 mb-2" />,
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    id: "deep",
    name: "Desafios Profundos",
    icon: <Brain className="h-6 w-6 mb-2" />,
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    id: "romantic",
    name: "Desafios Românticos",
    icon: <Heart className="h-6 w-6 mb-2" />,
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    id: "erotic",
    name: "Desafios Picantes",
    icon: <Flame className="h-6 w-6 mb-2" />,
    color: "from-red-500/20 to-red-600/10",
  },
]

export default function ConnectionGame() {
  const [gameState, setGameState] = useState<"category" | "subcategory" | "playing" | "favorites">("category")
  const [currentCategory, setCurrentCategory] = useState("")
  const [currentSubcategory, setCurrentSubcategory] = useState("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const cardControls = useAnimation()
  const { toast } = useToast()
  const cardRef = useRef<HTMLDivElement>(null)

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("connectionCardFavorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem("connectionCardFavorites", JSON.stringify(favorites))
  }, [favorites])

  // Generate questions when category or subcategory changes
  useEffect(() => {
    if (currentCategory) {
      if (currentCategory === "challenge" && currentSubcategory) {
        // Generate challenges for specific subcategory or all
        const generatedChallenges = generateChallenges(100, currentSubcategory)
        setQuestions(generatedChallenges)
      } else if (currentCategory !== "challenge") {
        // Generate questions for specific category
        const generatedQuestions = generateQuestions(currentCategory, 100)
        setQuestions(generatedQuestions)
      }
      setCurrentQuestionIndex(0)
    }
  }, [currentCategory, currentSubcategory])

  const startCategory = (categoryId: string) => {
    setCurrentCategory(categoryId)
    if (categoryId === "challenge") {
      setGameState("subcategory")
    } else {
      setGameState("playing")
    }
  }

  const startSubcategory = (subcategoryId: string) => {
    setCurrentSubcategory(subcategoryId)
    setGameState("playing")
  }

  const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100

    if (info.offset.x > threshold) {
      // Swiped right - like
      setDirection("right")
      await cardControls.start({
        x: 500,
        opacity: 0,
        rotate: 30,
        transition: { duration: 0.3 },
      })
      handleLike()
    } else if (info.offset.x < -threshold) {
      // Swiped left - pass
      setDirection("left")
      await cardControls.start({
        x: -500,
        opacity: 0,
        rotate: -30,
        transition: { duration: 0.3 },
      })
      handlePass()
    } else {
      // Reset position if not swiped far enough
      cardControls.start({ x: 0, opacity: 1, rotate: 0 })
    }
  }

  const handleLike = () => {
    const currentQuestion = questions[currentQuestionIndex]
    if (!favorites.includes(currentQuestion)) {
      setFavorites([...favorites, currentQuestion])
      toast({
        description: "Item adicionado aos favoritos",
      })
    }
    nextQuestion()
  }

  const handlePass = () => {
    nextQuestion()
  }

  const nextQuestion = () => {
    // Reset card position
    cardControls.start({ x: 0, opacity: 1, rotate: 0 })
    setDirection(null)

    // Move to next question or cycle back if at the end
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Regenerate questions when we've gone through all of them
      if (currentCategory === "challenge") {
        const newChallenges = generateChallenges(100, currentSubcategory)
        setQuestions(newChallenges)
      } else {
        const newQuestions = generateQuestions(currentCategory, 100)
        setQuestions(newQuestions)
      }
      setCurrentQuestionIndex(0)
      toast({
        description: currentCategory === "challenge" ? "Novos desafios gerados!" : "Novas perguntas geradas!",
      })
    }
  }

  const goToCategories = () => {
    setGameState("category")
    setCurrentCategory("")
    setCurrentSubcategory("")
  }

  const goToSubcategories = () => {
    setGameState("subcategory")
  }

  const goToFavorites = () => {
    setGameState("favorites")
  }

  const goBackFromFavorites = () => {
    if (currentCategory === "challenge" && currentSubcategory) {
      setGameState("playing")
    } else if (currentCategory === "challenge") {
      setGameState("subcategory")
    } else if (currentCategory) {
      setGameState("playing")
    } else {
      setGameState("category")
    }
  }

  const goBackFromSubcategories = () => {
    setGameState("category")
    setCurrentCategory("")
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-2">Conexões & Afetos</h1>
      <p className="text-center text-muted-foreground mb-8">Deslize para conhecer pessoas de forma divertida</p>

      {gameState === "category" && (
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                onClick={() => startCategory(category.id)}
                className={`h-32 flex flex-col items-center justify-center bg-gradient-to-br ${category.color} hover:bg-gradient-to-tr hover:shadow-md transition-all`}
              >
                {category.icon}
                <span className="text-lg font-medium">{category.name}</span>
              </Button>
            ))}
          </div>

          <Button variant="outline" onClick={goToFavorites} className="w-full flex items-center justify-center py-6">
            <BookmarkPlus className="h-5 w-5 mr-2" />
            Ver Favoritos
          </Button>
        </div>
      )}

      {gameState === "subcategory" && (
        <div className="w-full">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="icon" onClick={goBackFromSubcategories} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-semibold">Escolha o Tipo de Desafio</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {challengeSubcategories.map((subcategory) => (
              <Button
                key={subcategory.id}
                variant="outline"
                onClick={() => startSubcategory(subcategory.id)}
                className={`h-32 flex flex-col items-center justify-center bg-gradient-to-br ${subcategory.color} hover:bg-gradient-to-tr hover:shadow-md transition-all`}
              >
                {subcategory.icon}
                <span className="text-lg font-medium">{subcategory.name}</span>
              </Button>
            ))}
          </div>

          <Button variant="outline" onClick={goToFavorites} className="w-full flex items-center justify-center py-6">
            <BookmarkPlus className="h-5 w-5 mr-2" />
            Ver Favoritos
          </Button>
        </div>
      )}

      {gameState === "playing" && questions.length > 0 && (
        <div className="w-full">
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={currentCategory === "challenge" ? goToSubcategories : goToCategories}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-semibold">
              {currentCategory === "challenge"
                ? challengeSubcategories.find((sc) => sc.id === currentSubcategory)?.name
                : categories.find((c) => c.id === currentCategory)?.name}
            </h2>
            <Button variant="ghost" size="icon" onClick={goToFavorites}>
              <BookmarkPlus className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative w-full h-[60vh] max-h-[500px] flex justify-center items-center mb-8">
            <motion.div
              ref={cardRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={cardControls}
              className="absolute w-full max-w-md"
              style={{ touchAction: "none" }}
            >
              <Card
                className={`w-full aspect-[3/4] flex flex-col items-center justify-center p-6 shadow-lg bg-gradient-to-br ${
                  currentCategory === "challenge"
                    ? challengeSubcategories.find((sc) => sc.id === currentSubcategory)?.color
                    : categories.find((c) => c.id === currentCategory)?.color || "from-gray-100 to-white"
                }`}
              >
                <div className="text-center">
                  <p className="text-xl font-medium mb-6">{questions[currentQuestionIndex]}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Deslize para direita para curtir ou esquerda para passar
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Overlay indicators */}
            <div
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500/80 text-white p-3 rounded-full opacity-0 transition-opacity duration-200"
              style={{ opacity: direction === "left" ? 0.8 : 0 }}
            >
              <ThumbsDown className="h-6 w-6" />
            </div>
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500/80 text-white p-3 rounded-full opacity-0 transition-opacity duration-200"
              style={{ opacity: direction === "right" ? 0.8 : 0 }}
            >
              <ThumbsUp className="h-6 w-6" />
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full p-6 bg-red-100 hover:bg-red-200 border-red-200"
              onClick={() => handlePass()}
            >
              <ThumbsDown className="h-6 w-6 text-red-500" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full p-6 bg-green-100 hover:bg-green-200 border-green-200"
              onClick={() => handleLike()}
            >
              <ThumbsUp className="h-6 w-6 text-green-500" />
            </Button>
          </div>
        </div>
      )}

      {gameState === "favorites" && (
        <div className="w-full">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="icon" onClick={goBackFromFavorites} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-semibold">Seus Favoritos</h2>
          </div>

          {favorites.length === 0 ? (
            <p className="text-center text-muted-foreground p-8">
              Você ainda não adicionou nenhum item aos favoritos. Deslize para a direita nos itens que você gostar!
            </p>
          ) : (
            <div className="space-y-2">
              {favorites.map((item, index) => (
                <Card key={index} className="p-4 flex justify-between items-center">
                  <p>{item}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setFavorites(favorites.filter((q) => q !== item))
                      toast({
                        description: "Item removido dos favoritos",
                      })
                    }}
                  >
                    <BookmarkPlus className="h-4 w-4 text-primary" />
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
