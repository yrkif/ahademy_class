import React from 'react';

type GreetingProps = {
  name?: string;
};

export function Greeting({ name = 'John' }: GreetingProps) {
  return <h1>Hello, {name}</h1>;
}
