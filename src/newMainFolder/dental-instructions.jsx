"use client"

import { Users } from "lucide-react"

export default function DentalInstructions() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
        <h1 className="text-xl font-semibold text-gray-800">INSTRUCTIONS</h1>
      </div>

      {/* Instructions Content */}
      <div className="space-y-4">
        {/* Tooth Cleaning Section */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
            <Users className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">TOOTH CLEANING / SCALING</h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <span className="font-medium">(1)</span> It is very important to brush twice with proper method as
                specifically explained.
              </p>

              <p>
                <span className="font-medium">(2)</span> Don't worry if you feel sensitivity in the teeth for 24-48
                hours of the beginning. It is because the plaque and calculus from the teeth and gums has been cleaned.
                After healing, the teeth will become normal.
              </p>

              <p>
                <span className="font-medium">(3)</span> Do not take anything very hot or very cold until 24-48 hours
                after scaling.
              </p>

              <p>
                <span className="font-medium">(4)</span> You may feel like gaps have emerged in between the teeth but it
                is due to the removal of plaque and calculus. In 5-6 days, the gums will heal and the interdental gap
                will become healthy and normal.
              </p>

              <p>
                <span className="font-medium">(5)</span> Use the paste and mouthwash prescribed by the doctor and if any
                medicine is prescribed, take it on time.
              </p>

              <p className="mt-4">
                For having 100 years of everlasting beautiful and healthy smile, kindly follow instructions given above.
              </p>

              <p>For any other queries, contact the hospital at +91 94282 25282.</p>
            </div>

            {/* Gujarati Section */}
            <div className="mt-8 space-y-3 text-gray-700 leading-relaxed">
              <h3 className="font-semibold">દાંત ની સફાઈ / સ્કેલિંગ</h3>

              <p>
                <span className="font-medium">(1)</span> ખાસ સમજાવ્યા મુજબ બે વાર યોગ્ય પદ્ધતિથી બ્રશ કરવું ખૂબ જ જરૂરી છે.
              </p>

              <p>
                <span className="font-medium">(2)</span> જો શરૂઆત ના ૨૪-૪૮ કલાક સુધી દાંતમાં કનારો થાય એનું લાગે તો ચિંતા કરવી
                નહિ, દાંત અને પેઢા પરથી ક્ષારી-કચરાની સફાઈ થઈ હોય એટલે એનું લાગે. પેઢામાં રૂજ આવી ગયા પછી પહેલાં જેવું સામાન્ય થઈ જશે.
              </p>

              <p>
                <span className="font-medium">(3)</span> શરૂઆત ના ૨૪-૪૮ કલાક બને ત્યાં સુધી ખૂબ ગરમ કે ખૂબ ઠંડી વસ્તુ લેવી નહિ.
              </p>

              <p>
                <span className="font-medium">(4)</span> કદાચ શરૂઆતના ૫-૬ દિવસ માટે આગળના દાંત માં જગ્યા કીવી થશે અત્યારે ક્ષારી
                નીકળી છે એટલે ત્યાં જગ્યા છે પછી પેઢામાં રૂજ આવશે પછી સરસ થઈ જશે.
              </p>

              <p>
                <span className="font-medium">(5)</span> ખાસ ડોક્ટરે આપેલ પેસ્ટ અને માઉથ-વોશ ની ઉપયોગ કરવો અને જો કોઈ દવા લખી
                આપેલ હોય તો સમયસર લઈ લેવી.
              </p>

              <p className="mt-4">100 વર્ષ સુધી સુંદર અને સ્વસ્થ સ્મિત રાખવા માટે, ઉપર આપેલી સૂચનાઓને અનુસરો.</p>

              <p>અન્ય કોઈપણ પ્રશ્ન માટે, +91 94282 25282 પર હોસ્પિટલનો સંપર્ક કરો.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
