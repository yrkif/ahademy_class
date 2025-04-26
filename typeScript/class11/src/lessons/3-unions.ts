{
  // let id: number | string | boolean = 10;
  // id = 10;
  // id = true;
  // id = []
  // id = {}
  // console.log(id);
}

{
  type toDoComplete = {
    status: 'Complete'; //literal type
    completedAt: Date;
  };

  type toDoIncomplete = {
    status: 'Incomplete';
    reason: String;
  };

  type toDoStatus = toDoComplete | toDoIncomplete;

  const toDoStatus2: toDoStatus = {
    status: 'Incomplete',
    reason: 'I forgot it',
  };

  console.log(toDoStatus2);
}
