{
  // let id: number | string | boolean = 10;
  // id = 10;
  // id = true;
  // id = []
  // id = {}
  // console.log(id);
}

{
  type ToDoComplete = {
    status: 'Complete'; //literal type
    completedAt: Date;
  };

  type ToDoIncomplete = {
    //interface not support union
    status: 'Incomplete';
    reason: String;
  };

  type ToDoStatus = ToDoComplete | ToDoIncomplete;

  const toDoStatus2: ToDoStatus = {
    status: 'Incomplete',
    reason: 'I forgot it',
  };

  console.log(toDoStatus2);
}
