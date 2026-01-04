import { useState } from "react";

export default function SearchForm({ setFilters }) {
  const [form, setForm] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBeds: "",
    maxBeds: "",
    postcode: "",
    date: ""
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    setFilters(form);
  };

  return (
    <div className="search-form">
      <select name="type" onChange={update}>
        <option value="">Any type</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>

      <input name="minPrice" type="number" placeholder="Min price" onChange={update} />
      <input name="maxPrice" type="number" placeholder="Max price" onChange={update} />

      <input name="minBeds" type="number" placeholder="Min beds" onChange={update} />
      <input name="maxBeds" type="number" placeholder="Max beds" onChange={update} />

      <input name="postcode" placeholder="Postcode (e.g. BR)" onChange={update} />

      <input name="date" type="date" onChange={update} />

      <button onClick={submit}>Search</button>
    </div>
  );
}
