import { useState } from "react";
import { FaUserPlus } from "react-icons/fa"

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("consultation");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) return;

    onAdd({ name, service });
    setName("");
    setService("consultation");
  };

  return (
    <div>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            placeholder="customer name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div className="form-group">
            <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="consultation">consultation</option>
                <option value="payment">payment</option>
                <option value="support">support</option>
            </select>
        </div>
        <button type="submit"><FaUserPlus/> customer</button>
      </form>
    </div>
  );
}
