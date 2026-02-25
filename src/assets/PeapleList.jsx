import React, { useState } from "react";

export default function PeopleList({ people = [] }) {
  const [search, setSearch] = useState("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar persona..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px" }}
      />

      <ul>
        {filteredPeople.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age} años
          </li>
        ))}
      </ul>
    </div>
  );
}

// Usage example:
// const [people, setPeople] = useState([
//   { id: 1, name: "Juan", age: 30 },
//   { id: 2, name: "María", age: 25 },
// ]);
// <PeopleList people={people} />