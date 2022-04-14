export const userInputToUser = (args, hashedPassword) => {
  const nameArray = args.input.name.split(" ");
  const data = {
    password: hashedPassword,
    username: args.input.username,
    gender: args.input.gender,
    first_name: nameArray[0],
    last_name: nameArray[1],
    email: args.input.email,
  };
  return data;
};
