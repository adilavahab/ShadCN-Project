"use client";
import rawTodos from "@/data/todo-list.json";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";

interface TodoItem {
  id: number;
  text: string;
  checked: boolean;
}

type RawTodoItem = {
  id: number;
  label: string;
  completed: boolean;
};

const todos: TodoItem[] = (rawTodos as RawTodoItem[]).map((item: RawTodoItem) => ({
  id: item.id,
  text: item.label,
  checked: item.completed,
}));

const TodoList = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {format(date, "PPP")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            selected={date}
            onSelect={(date: Date | undefined) => { setDate(date!); setOpen(false); }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4">
        <div className="flex flex-col gap-4">
          {todos.map((item: TodoItem) => (
            <Card key={item.id} className="p-4 flex items-center gap-4">
              <Checkbox id={`todo-${item.id}`} checked={item.checked} />
              <label htmlFor={`todo-${item.id}`} className="text-sm text-muted-foreground">
                {item.text}
              </label>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
