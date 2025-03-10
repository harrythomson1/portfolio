"use client";

export default function ContactMe() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "40vh" }} className="dark:bg-gray-700 bg-gray-200 rounded-lg p-4 w-fit mx-auto">
      <form style={{ display: "flex", flexDirection: "column", gap: "8px" }} className="w-fit">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
