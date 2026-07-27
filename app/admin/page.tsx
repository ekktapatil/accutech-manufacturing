"use client";

import { useEffect, useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    const res = await fetch("/api/contact");
    const data = await res.json();
    setContacts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    const res = await fetch("/api/contact", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
      alert("Enquiry deleted successfully.");
    } else {
      alert("Failed to delete enquiry.");
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-xl">
        Loading enquiries...
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Contact Enquiries
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Company</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Message</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-t">
                <td className="p-3">{contact.name}</td>
                <td className="p-3">{contact.email}</td>
                <td className="p-3">{contact.phone}</td>
                <td className="p-3">{contact.company}</td>
                <td className="p-3">{contact.subject}</td>
                <td className="p-3">{contact.message}</td>
                <td className="p-3">
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}