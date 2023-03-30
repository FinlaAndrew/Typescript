class TodoItem {
    private description: string;
    private dueDate: Date;
    private isComplete: boolean;
  
    constructor(description: string, dueDate: Date) {
      this.description = description;
      this.dueDate = dueDate;
      this.isComplete = false;
    }
    public getDescription(): string {
        return this.description;
      }
    
      public setDescription(description: string): void {
        this.description = description;
      }
    
      public getDueDate(): Date {
        return this.dueDate;
      }
    
      public setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
      }
    
      public getIsComplete(): boolean {
        return this.isComplete;
      }
    
      public setIsComplete(isComplete: boolean): void {
        this.isComplete = isComplete;
      }
    }
    class TodoList {
        private items: TodoItem[];
      
        constructor() {
          this.items = [];
        }
      
        public addItem(item: TodoItem): void {
          this.items.push(item);
        }
      
        public removeItem(item: TodoItem): void {
          const index = this.items.indexOf(item);
          if (index !== -1) {
            this.items.splice(index, 1);
          }
        }
      
        public completeItem(item: TodoItem): void {
          item.setIsComplete(true);
        }
      
        public getItems(): TodoItem[] {
          return this.items;
        }
      }
      
      // Example usage:
      const todoList = new TodoList();
      const item1 = new TodoItem("Buy milk", new Date("2023-03-31"));
      const item2 = new TodoItem("Do laundry", new Date("2023-04-01"));
      todoList.addItem(item1);
      todoList.addItem(item2);
      console.log(todoList.getItems()); 
      todoList.completeItem(item1);
      console.log(todoList.getItems()); 
      todoList.removeItem(item2);
      console.log(todoList.getItems()); 