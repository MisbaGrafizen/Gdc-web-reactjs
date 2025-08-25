"use client"
import { motion } from "framer-motion"
import { Camera, Check, X, Lightbulb, Eye } from "lucide-react"

const PhotoGuide = () => {
  const photoTips = [
    {
      title: "Good Lighting",
      do: "Use natural daylight or bright indoor lighting",
      dont: "Avoid dim lighting or harsh shadows",
      icon: Lightbulb,
      doImage: "/placeholder.svg?height=150&width=200",
      dontImage: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Neutral Background",
      do: "Use a plain white or light colored background",
      dont: "Avoid busy patterns or dark backgrounds",
      icon: Eye,
      doImage: "/placeholder.svg?height=150&width=200",
      dontImage: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Camera Position",
      do: "Keep camera at mouth level, straight on",
      dont: "Avoid tilted angles or too high/low positions",
      icon: Camera,
      doImage: "/placeholder.svg?height=150&width=200",
      dontImage: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Steady Hands",
      do: "Keep hands steady, use timer if needed",
      dont: "Avoid blurry or shaky photos",
      icon: Check,
      doImage: "/placeholder.svg?height=150&width=200",
      dontImage: "/placeholder.svg?height=150&width=200",
    },
  ]

  const requiredPhotos = [
    { name: "Front Relaxed Smile", description: "Natural smile with lips slightly apart" },
    { name: "Front Big Smile", description: "Wide smile showing all teeth" },
    { name: "Right Profile", description: "Side view from the right" },
    { name: "Left Profile", description: "Side view from the left" },
    { name: "Upper Teeth Close-up", description: "Close-up of upper teeth" },
    { name: "Lower Teeth Close-up", description: "Close-up of lower teeth" },
    { name: "Left Bite", description: "Bite view from the left side" },
    { name: "Right Bite", description: "Bite view from the right side" },
  ]

  return (
    <section id="photo-guide" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Guide</h2>
          <p className="text-gray-600">Follow these guidelines to capture the best photos for your consultation</p>
        </motion.div>

        {/* Photo Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {photoTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-lg flex items-center justify-center">
                  <tip.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{tip.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="relative mb-3">
                    <img
                      src={tip.doImage || "/placeholder.svg"}
                      alt={`Do: ${tip.do}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-green-700 font-medium">✓ DO</p>
                  <p className="text-xs text-gray-600 mt-1">{tip.do}</p>
                </div>

                <div className="text-center">
                  <div className="relative mb-3">
                    <img
                      src={tip.dontImage || "/placeholder.svg"}
                      alt={`Don't: ${tip.dont}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 rounded-full p-1">
                      <X className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-red-700 font-medium">✗ DON'T</p>
                  <p className="text-xs text-gray-600 mt-1">{tip.dont}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Required Photos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Required Photo Types</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {requiredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-lg p-4 border border-teal-100"
              >
                <div className="text-center">
                  <Camera className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{photo.name}</h4>
                  <p className="text-xs text-gray-600">{photo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start space-x-3">
              <Camera className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-2">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Upload at least 3 photos, maximum 12</li>
                  <li>Each photo should be less than 25MB</li>
                  <li>Accepted formats: JPG, PNG</li>
                  <li>Ensure photos are clear and well-lit</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PhotoGuide
