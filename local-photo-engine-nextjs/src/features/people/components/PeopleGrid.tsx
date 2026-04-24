"use client";

import React from "react";
import { PersonCard } from "@/features/shared/cards/AppCards";
import { mockPeople } from "@/data/mock-data";

export const PeopleGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {mockPeople.map((p) => (
        <PersonCard key={p.id} person={p} />
      ))}
    </div>
  );
};
