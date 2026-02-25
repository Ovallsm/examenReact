import { useState } from "react";

export default function PeopleList({ people = [], filterKey = "name" }) {
  const [search, setSearch] = useState("");

  const filteredPeople = people.filter((person) =>
    person[filterKey]
      ?.toString()
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder={`Buscar por ${filterKey}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "12px",
          padding: "8px",
          width: "100%",
          maxWidth: "300px",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredPeople.map((person) => (
          <li
            key={person.id}
            style={{
              padding: "8px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            {person.name} - {person.age} años
          </li>
        ))}
      </ul>
    </div>
  );
}

// Usage example:
// <PeopleList
//   people={[
//     { id: 1, name: "Juan Pérez", age: 28 },
//     { id: 2, name: "María López", age: 34 },
//     { id: 3, name: "Carlos Sánchez", age: 22 },
//   ]}
// />

// or from a parent component:
// const [people, setPeople] = useState([]);
// <PeopleList people={people} filterKey="name" />