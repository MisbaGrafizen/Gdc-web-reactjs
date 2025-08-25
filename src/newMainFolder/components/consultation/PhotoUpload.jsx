"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, X, Info } from "lucide-react"

const PhotoUpload = ({ formData, updateFormData, errors, updateErrors, onNext, onPrev }) => {
  const [localErrors, setLocalErrors] = useState({})

  const photoSlots = [
    { id: "frontRelaxed", label: "Front Relaxed Smile", tooltip: "Natural smile with lips slightly apart" },
    { id: "frontBig", label: "Front Big Smile", tooltip: "Wide smile showing all teeth" },
    { id: "rightProfile", label: "Right Profile", tooltip: "Side view from the right" },
    { id: "leftProfile", label: "Left Profile", tooltip: "Side view from the left" },
    { id: "upperTeeth", label: "Upper Teeth Close-up", tooltip: "Close-up of upper teeth" },
    { id: "lowerTeeth", label: "Lower Teeth Close-up", tooltip: "Close-up of lower teeth" },
    { id: "leftBite", label: "Left Bite", tooltip: "Bite view from the left side" },
    { id: "rightBite", label: "Right Bite", tooltip: "Bite view from the right side" },
  ]

  const handlePhotoUpload = (e, slotId) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file
      const isValidType = ["image/jpeg", "image/png", "image/jpg"].includes(file.type)
      const isValidSize = file.size <= 25 * 1024 * 1024 // 25MB

      if (!isValidType) {
        setLocalErrors((prev) => ({ ...prev, [slotId]: "Please upload JPG or PNG files only" }))
        return
      }

      if (!isValidSize) {
        setLocalErrors((prev) => ({ ...prev, [slotId]: "File size must be less than 25MB" }))
        return
      }

      // Clear error and update photo
      setLocalErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[slotId]
        return newErrors
      })

      const photos = { ...formData.photos }
      photos[slotId] = file
      updateFormData({ photos })
    }
  }

  const removePhoto = (slotId) => {
    const photos = { ...formData.photos }
    delete photos[slotId]
    updateFormData({ photos })
  }

  const handleNext = () => {
    const photoCount = Object.keys(formData.photos || {}).length
    const newErrors = {}

    if (photoCount < 3) {
      newErrors.photos = "Please upload at least 3 photos"
    }

    if (photoCount > 12) {
      newErrors.photos = "Maximum 12 photos allowed"
    }

    setLocalErrors(newErrors)
    updateErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onNext()
    }
  }

  const photoCount = Object.keys(formData.photos || {}).length
  const isFormValid = photoCount >= 3 && photoCount <= 12

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Photo Upload</h3>
        <p className="text-gray-600 mb-4">
          Upload photos as per our photo guide. At least 3 photos required, maximum 12.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Photo Tips:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Good lighting, neutral background</li>
                <li>Camera at mouth level</li>
                <li>Keep hands steady</li>
                <li>JPG/PNG format, max 25MB each</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photoSlots.map((slot) => (
          <PhotoSlot
            key={slot.id}
            slot={slot}
            photo={formData.photos?.[slot.id]}
            onUpload={handlePhotoUpload}
            onRemove={removePhoto}
            error={localErrors[slot.id]}
          />
        ))}
      </div>

      {localErrors.photos && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{localErrors.photos}</p>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          Photos uploaded: <span className="font-semibold">{photoCount}/12</span>
          {photoCount >= 3 && <span className="text-green-600 ml-2">✓ Minimum requirement met</span>}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
        >
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-lg font-semibold transition-all ${
            isFormValid
              ? "bg-gradient-to-br from-[#1b2644] to-blue-600  text-white shadow-lg hover:shadow-xl"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next Step
        </motion.button>
      </div>
    </div>
  )
}

const PhotoSlot = ({ slot, photo, onUpload, onRemove, error }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 transition-all"
    >
      <div className="relative">
        {photo ? (
          <div className="relative">
            <img
              src={URL.createObjectURL(photo) || "/placeholder.svg"}
              alt={slot.label}
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              onClick={() => onRemove(slot.id)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.getElementById(`photo-${slot.id}`).click()}
              className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all flex items-center justify-center"
            >
              <Camera className="w-6 h-6 text-white opacity-0 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        ) : (
          <div className="h-32 flex flex-col items-center justify-center">
            <Camera className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 font-medium">{slot.label}</p>
          </div>
        )}

        <input
          type="file"
          id={`photo-${slot.id}`}
          accept="image/jpeg,image/png,image/jpg"
          onChange={(e) => onUpload(e, slot.id)}
          className="hidden"
        />

        {!photo && (
          <button
            onClick={() => document.getElementById(`photo-${slot.id}`).click()}
            className="mt-2 text-xs text-blue-900 hover:text-teal-700 font-medium"
          >
            Click to upload
          </button>
        )}
      </div>

      <div className="mt-2">
        <p className="text-xs text-gray-500" title={slot.tooltip}>
          {slot.tooltip}
        </p>
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </motion.div>
  )
}

export default PhotoUpload
