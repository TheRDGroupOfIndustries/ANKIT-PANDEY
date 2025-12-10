"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

const PaymentModal = ({ isOpen, onClose, courseTitle }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const isFormValid = file && username.trim() !== "" && email.trim() !== "";

  const handleUpload = (e: any) => {
    setFile(e.target.files[0]);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !username || !email) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("courseTitle", courseTitle);
    formData.append("username", username);
    formData.append("email", email);

    const res = await fetch("/api/send-payment-proof", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Payment submitted successfully!");
      setFile(null);
      setUsername("");
      setEmail("");

      onClose();
    } else {
      toast.error("Failed to send. Try again!");
    }
  };
  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal-overlay") onClose();
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
    >
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-scaleIn ">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          ×
        </button>

        <h2 className="text-lg font-bold text-gray-900 mb-4 text-center leading-snug">
          Payment For <span className="text-blue-600">{courseTitle}</span>
        </h2>

        {/* Bank Details */}
        <div className="space-y-2 bg-gray-100 p-4 rounded-xl shadow-md border-gray-100 border text-sm">
          {[
            { label: "Bank Name", value: "HDFC Bank" },
            { label: "Account Holder", value: "Ankit Pandey" },
            { label: "Account Number", value: "12345678901234" },
            { label: "IFSC Code", value: "HDFC0001234" },
          ].map((item) => (
            <p key={item.label} className="flex justify-between">
              <span>
                <strong>{item.label}:</strong> {item.value}
              </span>
              <i
                onClick={() => copyText(item.value)}
                className="ri-file-copy-line cursor-pointer text-blue-600"
              ></i>
            </p>
          ))}
        </div>

        {/* QR CODE */}
        <div className="mt-4 text-center">
          <h3 className="text-sm font-semibold mb-2">Scan & Pay</h3>
          <div className="w-36 h-36 mx-auto border border-gray-100  rounded-xl overflow-hidden bg-white shadow-md">
            <Image
              src="/images/qr_code.png"
              alt="QR Code"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        </div>

        {/* Form */}
        <div className="mt-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-2 border-gray-300 p-2 rounded-lg mb-2 text-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-2 border-gray-300 p-2 rounded-lg mb-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="text-gray-700 font-medium block mb-1 text-sm">
            Upload Payment Screenshot
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="w-full border-2 border-gray-300  p-2 rounded-lg text-sm"
          />

          {file && (
            <p className="mt-1 text-green-600 text-xs">Uploaded: {file.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading || !isFormValid}
          className={`w-full mt-5 py-3 rounded-xl text-white text-sm font-semibold transition 
    ${
      !isFormValid || loading
        ? "bg-blue-300 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700"
    }`}
        >
          {loading ? "Submitting..." : "Submit Payment"}
        </button>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scaleIn {
            0% { transform: scale(0.85); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleIn {
            animation: scaleIn 0.25s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default PaymentModal;
