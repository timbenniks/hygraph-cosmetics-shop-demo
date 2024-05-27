"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSeccuss] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(
      `/api/subscribe?email=${encodeURIComponent(email)}`
    );

    const data = await res.json();

    setSeccuss("Thanks for subscribing");
  };

  return (
    <div className="w-full bg-tertiary p-4">
      <form onSubmit={handleSubmit}>
        {success !== "" ? (
          <p>{success}</p>
        ) : (
          <div className="flex space-x-4">
            <input
              type="email"
              id="email"
              name="email"
              className="px-4 py-1 text-primary placeholder:text-primary border border-primary"
              placeholder="Subscribe to newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="cta" type="submit">
              Go
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
