"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

type CardItem = {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
};

const CardList = ({ title }: { title: string }) => {
  const [list, setList] = useState<CardItem[]>([]);
  const filename =
    title === "Popular Content"
      ? "popular-content"
      : "latest-transactions";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://shadcn-project.onrender.com/api/${filename}`);
        const data = await res.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filename]);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
