"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Search, Plus, Download, X, Edit, Trash2 } from "lucide-react"
import Header from "../../Component/header/Header"
import SideBar from "../../Component/sidebar/SideBar"
import { ApiGet, ApiPost } from "../../helper/axios"

// interface WeddingInquiry {
//   id
//   guestName
//   contactNo
//   reference
//   checkInDate
//   checkOutDate
//   duration
//   advanceCash
//   advanceBank
//   quotationAmount
//   breakupPayments
//   lastDiscussion
//   lastContactedDate
//   status: "Pending" | "Confirmed" | "Booked" | "Not Interested" | "Postponed"
// }

const EventInquiryDashboard = () => {
     const [inquiries, setInquiries] = useState([
           {
               id: 1,
               name: "Rajesh & Priya Sharma",
               contactNo: "+91 9876543210",
               reference: "Friend Referral",
               checkInDate: "2024-03-15",
               checkOutDate: "2024-03-17",
               duration: 2,
               advanceCash: 50000,
               advanceBank: 100000,
               quotationAmount: 500000,
               breakupPayments: "Venue: 200000, Catering: 150000, Decoration: 100000, Photography: 50000",
               lastDiscussion: "Discussed venue decoration and menu preferences",
               lastContactedDate: "2024-01-15",
               status: "Confirmed",
           },
           {
               id: 2,
               name: "Amit & Sneha Patel",
               contactNo: "+91 9876543211",
               reference: "Online Inquiry",
               checkInDate: "2024-04-20",
               checkOutDate: "2024-04-22",
               duration: 2,
               advanceCash: 25000,
               advanceBank: 75000,
               quotationAmount: 450000,
               breakupPayments: "Venue: 180000, Catering: 140000, Decoration: 80000, Photography: 50000",
               lastDiscussion: "Waiting for final confirmation on dates",
               lastContactedDate: "2024-01-10",
               status: "Pending",
           },
           {
               id: 3,
               name: "Vikram & Kavya Singh",
               contactNo: "+91 9876543212",
               reference: "Wedding Planner",
               checkInDate: "2024-05-10",
               checkOutDate: "2024-05-12",
               duration: 2,
               advanceCash: 75000,
               advanceBank: 125000,
               quotationAmount: 600000,
               breakupPayments: "Venue: 250000, Catering: 200000, Decoration: 100000, Photography: 50000",
               lastDiscussion: "Booked successfully, planning meeting scheduled",
               lastContactedDate: "2024-01-12",
               status: "Booked",
           },
       ])
   
       const [filteredInquiries, setFilteredInquiries] = useState(inquiries)
       const [isModalOpen, setIsModalOpen] = useState(false)
       const [editingInquiry, setEditingInquiry] = useState(null)
       const [currentPage, setCurrentPage] = useState(1)
       const [itemsPerPage] = useState(10)
   
       // Filter states
       const [filters, setFilters] = useState({
           name: "",
           status: "",
           checkInDate: "",
           checkOutDate: "",
           minQuotation: "",
           maxQuotation: "",
       })
   
       // Form state
       const [formData, setFormData] = useState({
           name: "",
           contactNo: "",
           reference: "",
           checkInDate: "",
           checkOutDate: "",
           advanceCash: 0,
           advanceBank: 0,
           quotationAmount: 0,
           breakupPayments: "",
           lastDiscussion: "",
           status: "Pending",
       })
   
       // Calculate duration when dates change
       const calculateDuration = (checkIn, checkOut) => {
           if (checkIn && checkOut) {
               const start = new Date(checkIn)
               const end = new Date(checkOut)
               const diffTime = Math.abs(end.getTime() - start.getTime())
               const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
               return diffDays
           }
           return 0
       }
   
       // Apply filters
       useEffect(() => {
           const filtered = inquiries.filter((inquiry) => {
               const matchesName = inquiry.name.toLowerCase().includes(filters.name.toLowerCase())
               const matchesStatus = !filters.status || inquiry.status === filters.status
               const matchesCheckIn = !filters.checkInDate || inquiry.checkInDate >= filters.checkInDate
               const matchesCheckOut = !filters.checkOutDate || inquiry.checkOutDate <= filters.checkOutDate
               const matchesMinQuotation =
                   !filters.minQuotation || inquiry.quotationAmount >= Number.parseInt(filters.minQuotation)
               const matchesMaxQuotation =
                   !filters.maxQuotation || inquiry.quotationAmount <= Number.parseInt(filters.maxQuotation)
   
               return (
                   matchesName && matchesStatus && matchesCheckIn && matchesCheckOut && matchesMinQuotation && matchesMaxQuotation
               )
           })
           setFilteredInquiries(filtered)
           setCurrentPage(1)
       }, [filters, inquiries])
   
      
   
   const fetchWeddingInquiries = async () => {
     try {
       const res = await ApiGet("/general-planner-sheet");
       console.log('res', res)
       if (res.data && res.data) {
         setInquiries(res.data)
         setFilteredInquiries(res.data)
         setCurrentPage(1)
       }
     } catch (error) {
       console.error("Error fetching wedding inquiries:", error)
       alert("Failed to fetch wedding planner data.")
     }
   }
   
   
   useEffect(() => {
       fetchWeddingInquiries();
   }, []);
   
       const handleFilterChange = (key, value) => {
           setFilters((prev) => ({ ...prev, [key]: value }))
       }
   
       const handleFormChange = (key, value) => {
           setFormData((prev) => ({ ...prev, [key]: value }))
       }
   
       // const handleSubmit = (e) => {
       //     e.preventDefault()
       //     const duration = calculateDuration(formData.checkInDate, formData.checkOutDate)
   
       //     if (editingInquiry) {
       //         // Update existing inquiry
       //         setInquiries((prev) =>
       //             prev.map((inquiry) =>
       //                 inquiry.id === editingInquiry.id
       //                     ? {
       //                         ...inquiry,
       //                         ...formData,
       //                         duration,
       //                         lastContactedDate: new Date().toISOString().split("T")[0],
       //                     }
       //                     : inquiry,
       //             ),
       //         )
       //     } else {
       //         // Add new inquiry
       //         const newInquiry = {
       //             id: Date.now(),
       //             ...formData,
       //             duration,
       //             lastContactedDate: new Date().toISOString().split("T")[0],
       //         }
       //         setInquiries((prev) => [...prev, newInquiry])
       //     }
   
       //     // Reset form and close modal
       //     setFormData({
       //         name: "",
       //         contactNo: "",
       //         reference: "",
       //         checkInDate: "",
       //         checkOutDate: "",
       //         advanceCash: 0,
       //         advanceBank: 0,
       //         quotationAmount: 0,
       //         breakupPayments: "",
       //         lastDiscussion: "",
       //         status: "Pending",
       //     })
       //     setIsModalOpen(false)
       //     setEditingInquiry(null)
       // }
   
       const handleSubmit = async (e) => {
     e.preventDefault()
     const duration = calculateDuration(formData.checkInDate, formData.checkOutDate)
   
     const payload = {
       ...formData,
       duration,
       lastContactedDate: new Date().toISOString().split("T")[0],
     }
   
     try {
       const res = await ApiPost("/general-planner-sheet", payload)
   
       if (res?.success === "true") {
         // Optionally refetch all data from backend here
         setInquiries((prev) => [...prev, res.data]) // If res.data is the newly created record
         setIsModalOpen(false)
         setEditingInquiry(null)
         setFormData({
           name: "",
           contactNo: "",
           reference: "",
           checkInDate: "",
           checkOutDate: "",
           advanceCash: 0,
           advanceBank: 0,
           quotationAmount: 0,
           breakupPayments: "",
           lastDiscussion: "",
           status: "Pending",
         })
       } 
     } catch (err) {
       console.error("Error creating inquiry:", err)
       alert("Error creating inquiry")
     }
   }
   
   
       const handleEdit = (inquiry) => {
           setEditingInquiry(inquiry)
           setFormData({
               name: inquiry.name,
               contactNo: inquiry.contactNo,
               reference: inquiry.reference,
               checkInDate: inquiry.checkInDate,
               checkOutDate: inquiry.checkOutDate,
               advanceCash: inquiry.advanceCash,
               advanceBank: inquiry.advanceBank,
               quotationAmount: inquiry.quotationAmount,
               breakupPayments: inquiry.breakupPayments,
               lastDiscussion: inquiry.lastDiscussion,
               status: inquiry.status,
           })
           setIsModalOpen(true)
       }
   
       const handleDelete = (id) => {
           if (window.confirm("Are you sure you want to delete this inquiry?")) {
               setInquiries((prev) => prev.filter((inquiry) => inquiry.id !== id))
           }
       }
   
       const getStatusColor = (status) => {
           switch (status) {
               case "Confirmed":
               case "Booked":
                   return "bg-green-100 text-green-800"
               case "Pending":
               case "Postponed":
                   return "bg-yellow-100 text-yellow-800"
               case "Not Interested":
                   return "bg-red-100 text-red-800"
               default:
                   return "bg-gray-100 text-gray-800"
           }
       }
   
       const exportToExcel = () => {
           const headers = [
               "SL No.",
               "Guest Name",
               "Contact No.",
               "Reference",
               "Check-In Date",
               "Check-Out Date",
               "Duration",
               "Advance Cash",
               "Advance Bank",
               "Quotation Amount",
               "Breakup of Payments",
               "Last Discussion",
               "Last Contacted Date",
               "Status",
           ]
   
           let csvContent = headers.join(",") + "\n"
   
           filteredInquiries.forEach((inquiry, index) => {
               const row = [
                   index + 1,
                   `"${inquiry.name}"`,
                   inquiry.contactNo,
                   `"${inquiry.reference}"`,
                   inquiry.checkInDate,
                   inquiry.checkOutDate,
                   inquiry.duration,
                   inquiry.advanceCash,
                   inquiry.advanceBank,
                   inquiry.quotationAmount,
                   `"${inquiry.breakupPayments}"`,
                   `"${inquiry.lastDiscussion}"`,
                   inquiry.lastContactedDate,
                   inquiry.status,
               ]
               csvContent += row.join(",") + "\n"
           })
   
           const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
           const link = document.createElement("a")
           const url = URL.createObjectURL(blob)
           link.setAttribute("href", url)
           link.setAttribute("download", "wedding_inquiries.csv")
           link.style.visibility = "hidden"
           document.body.appendChild(link)
           link.click()
           document.body.removeChild(link)
       }
   
       // Pagination
       const indexOfLastItem = currentPage * itemsPerPage
       const indexOfFirstItem = indexOfLastItem - itemsPerPage
       const currentItems = filteredInquiries.slice(indexOfFirstItem, indexOfLastItem)
       const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage)
   
       return (
           <>
               <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
                   <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
                       <Header pageName="Wedding Inquiry Dashboard" />
                       <div className="flex gap-[10px] w-[100%] h-[100%]">
                           <SideBar />
                           <div className=" p-[10px] flex flex-col bg-white w-[100%] max-h-[90%] pb-[50px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
   
                               <div className=" w-[100%] ">
                                   <div className=" flex w-[100%] mb-[20px] justify-end">
   
   
                                       <div className="flex w-fit gap-3">
                                           <button
                                               onClick={exportToExcel}
                                               className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                           >
                                               <Download size={16} />
                                               Export to Excel
                                           </button>
                                           <button
                                               onClick={() => setIsModalOpen(true)}
                                               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                           >
                                               <Plus size={18} />
                                               Add Inquiry
                                           </button>
                                       </div>
                                   </div>
                                   {/* Main Content */}
                                   <div className="p">
                                       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                           <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300  scrollbar-default scrollbar-track-gray-100">
                                               <table className="w-full">
                                                   <thead className="bg-gray-50 border-b border-gray-200">
                                                       <tr>
                                                           <th className="px-4 py-3 min-w-[80px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               SL No.
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Guest Name
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Contact No.
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Reference
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Check-In
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Check-Out
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Duration
                                                           </th>
                                                           <th className="px-4 py-3  min-w-[140px] flex-shrink-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Advance Cash
                                                           </th>
                                                           <th className="px-4 py-3  min-w-[140px] flex-shrink-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Advance Bank
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Quotation
                                                           </th>
                                                           <th className="px-4 py-3 flex-shrink-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Breakup
                                                           </th>
                                                           <th className="px-4 py-3   flex-shrink-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Last Discussion
                                                           </th>
                                                           <th className="px-4 py-3  min-w-[160px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Last Contacted
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Status
                                                           </th>
                                                           <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                               Actions
                                                           </th>
                                                       </tr>
                                                   </thead>
                                                   <tbody className="bg-white divide-y divide-gray-200">
                                                       {currentItems.map((inquiry, index) => (
                                                           <tr key={inquiry.id} className="hover:bg-gray-50">
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                                                   {indexOfFirstItem + index + 1}
                                                               </td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                   {inquiry.name}
                                                               </td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{inquiry.contactNo}</td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{inquiry.reference}</td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{inquiry.checkInDate}</td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{inquiry.checkOutDate}</td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{inquiry.duration} days</td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                                                   ₹{inquiry.advanceCash?.toLocaleString()}
                                                               </td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                                                   ₹{inquiry.advanceBank?.toLocaleString()}
                                                               </td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                                                   ₹{inquiry.quotationAmount?.toLocaleString()}
                                                               </td>
                                                               <td className="px-4 py-3 text-sm text-gray-900 max-w-xs truncate">{inquiry.breakupPayments}</td>
                                                               <td className="px-4 py-3 text-sm text-gray-900 max-w-xs truncate">{inquiry.lastDiscussion}</td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{inquiry.lastContactedDate}</td>
                                                               <td className="px-4 py-3 whitespace-nowrap">
                                                                   <span
                                                                       className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(inquiry.status)}`}
                                                                   >
                                                                       {inquiry.status}
                                                                   </span>
                                                               </td>
                                                               <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                                                                   <div className="flex gap-2">
                                                                       <button onClick={() => handleEdit(inquiry)} className="text-blue-600 hover:text-blue-900">
                                                                           <Edit size={16} />
                                                                       </button>
                                                                       <button onClick={() => handleDelete(inquiry.id)} className="text-red-600 hover:text-red-900">
                                                                           <Trash2 size={16} />
                                                                       </button>
                                                                   </div>
                                                               </td>
                                                           </tr>
                                                       ))}
                                                   </tbody>
                                               </table>
                                           </div>
   
                                           {/* Pagination */}
                                           {totalPages > 1 && (
                                               <div className="px-6 py-4 border-t border-gray-200">
                                                   <div className="flex items-center justify-between">
                                                       <div className="text-sm text-gray-700">
                                                           Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredInquiries.length)} of{" "}
                                                           {filteredInquiries.length} results
                                                       </div>
                                                       <div className="flex gap-2">
                                                           <button
                                                               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                               disabled={currentPage === 1}
                                                               className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                           >
                                                               Previous
                                                           </button>
                                                           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                               <button
                                                                   key={page}
                                                                   onClick={() => setCurrentPage(page)}
                                                                   className={`px-3 py-1 text-sm border rounded-md ${currentPage === page
                                                                       ? "bg-blue-600 text-white border-blue-600"
                                                                       : "border-gray-300 hover:bg-gray-50"
                                                                       }`}
                                                               >
                                                                   {page}
                                                               </button>
                                                           ))}
                                                           <button
                                                               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                               disabled={currentPage === totalPages}
                                                               className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                           >
                                                               Next
                                                           </button>
                                                       </div>
                                                   </div>
                                               </div>
                                           )}
                                       </div>
                                   </div>
   
                                   {/* Modal */}
                                   {isModalOpen && (
                                       <div className="fixed inset-0 z-50 overflow-y-auto">
                                           <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                               <div
                                                   className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                                                   onClick={() => setIsModalOpen(false)}
                                               ></div>
   
                                               <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                                                   <div className="flex justify-between items-center mb-6">
                                                       <h3 className="text-lg font-medium text-gray-900">
                                                           {editingInquiry ? "Edit Inquiry" : "Add New Inquiry"}
                                                       </h3>
                                                       <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                                           <X size={24} />
                                                       </button>
                                                   </div>
   
                                                   <form onSubmit={handleSubmit} className="space-y-6">
                                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Guest Name *</label>
                                                               <input
                                                                   type="text"
                                                                   required
                                                                   value={formData.name}
                                                                   onChange={(e) => handleFormChange("name", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                                                               <input
                                                                   type="tel"
                                                                   required
                                                                   value={formData.contactNo}
                                                                   onChange={(e) => handleFormChange("contactNo", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Reference</label>
                                                               <input
                                                                   type="text"
                                                                   value={formData.reference}
                                                                   onChange={(e) => handleFormChange("reference", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                                               <select
                                                                   value={formData.status}
                                                                   onChange={(e) => handleFormChange("status", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               >
                                                                   <option value="Pending">Pending</option>
                                                                   <option value="Confirmed">Confirmed</option>
                                                                   <option value="Booked">Booked</option>
                                                                   <option value="Not Interested">Not Interested</option>
                                                                   <option value="Postponed">Postponed</option>
                                                               </select>
                                                           </div>
   
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Check-In Date *</label>
                                                               <input
                                                                   type="date"
                                                                   required
                                                                   value={formData.checkInDate}
                                                                   onChange={(e) => handleFormChange("checkInDate", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Check-Out Date *</label>
                                                               <input
                                                                   type="date"
                                                                   required
                                                                   value={formData.checkOutDate}
                                                                   onChange={(e) => handleFormChange("checkOutDate", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Advance in Cash</label>
                                                               <input
                                                                   type="number"
                                                                   value={formData.advanceCash}
                                                                   onChange={(e) => handleFormChange("advanceCash", Number.parseInt(e.target.value) || 0)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div>
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Advance in Bank</label>
                                                               <input
                                                                   type="number"
                                                                   value={formData.advanceBank}
                                                                   onChange={(e) => handleFormChange("advanceBank", Number.parseInt(e.target.value) || 0)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div className="md:col-span-2">
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Quotation Amount</label>
                                                               <input
                                                                   type="number"
                                                                   value={formData.quotationAmount}
                                                                   onChange={(e) => handleFormChange("quotationAmount", Number.parseInt(e.target.value) || 0)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                               />
                                                           </div>
   
                                                           <div className="md:col-span-2">
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Breakup of Payments</label>
                                                               <textarea
                                                                   rows={3}
                                                                   value={formData.breakupPayments}
                                                                   onChange={(e) => handleFormChange("breakupPayments", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                   placeholder="Enter payment breakup details..."
                                                               />
                                                           </div>
   
                                                           <div className="md:col-span-2">
                                                               <label className="block text-sm font-medium text-gray-700 mb-2">Last Discussion</label>
                                                               <textarea
                                                                   rows={3}
                                                                   value={formData.lastDiscussion}
                                                                   onChange={(e) => handleFormChange("lastDiscussion", e.target.value)}
                                                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                   placeholder="Enter discussion notes..."
                                                               />
                                                           </div>
                                                       </div>
   
                                                       <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                                                           <button
                                                               type="button"
                                                               onClick={() => setIsModalOpen(false)}
                                                               className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                                           >
                                                               Cancel
                                                           </button>
                                                           <button
                                                               type="submit"
                                                               className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                                                           >
                                                               {editingInquiry ? "Update Inquiry" : "Save Inquiry"}
                                                           </button>
                                                       </div>
                                                   </form>
                                               </div>
                                           </div>
                                       </div>
                                   )}
                               </div>
                           </div>
   
                       </div>
                   </div>
               </section>
   
   
   
           </>
       )
   }
   
   export default EventInquiryDashboard
   