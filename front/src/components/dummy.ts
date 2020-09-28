interface FolderConfig {
  id: number;
  title: string;
  listArray?: ListConfig[];
  updated_at?: string;
  created_at?: string;
}

interface ListConfig {
  id: number;
  //   titleId: number;
  title: string;
  todoArray?: TodoConfig[];
  updated_at?: string;
  created_at?: string;
}

interface TodoConfig {
  id: number;
  //   listId: number;
  title: string;
  description?: string;
}

interface FolderItems extends Array<FolderConfig> {}

interface ListItems extends Array<ListConfig> {}

interface TodoItems extends Array<TodoConfig> {}

export const folder: FolderItems = [
  {
    id: 1,
    title: 'note',
    listArray: [
      {
        id: 1,
        title: 'new list',
        todoArray: [{ id: 1, title: 'new card', description: '' }],
      },
    ],
  },
];
