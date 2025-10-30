let userId = 0;
const users = new Map();

export function createUser(req, res) {
  const user = req.body;
  user.id = ++userId; // Create unique id
  users.set(user.id, user);
  res.status(201).send(`User created with ID: ${user.id}`);
}

export function getAllUsers(req, res) {
  const allUsers = Array.from(users.values());
  res.status(200).json(allUsers);
}

export function getUser(req, res) {
  const id = parseInt(req.params.id);
  if (users.has(id)) {
    res.status(200).json(users.get(id));
  } else {
    res.status(404).send("User not found");
  }
}

export function updateUser(req, res) {
  const id = parseInt(req.params.id);
  if (users.has(id)) {
    const updatedUser = req.body;
    updatedUser.id = id;
    users.set(id, updatedUser);
    res.status(200).send(`User ${id} updated`);
  } else {
    res.status(404).send("User not found");
  }
}

export function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  if (users.has(id)) {
    users.delete(id);
    res.status(200).send(`User ${id} deleted`);
  } else {
    res.status(404).send("User not found");
  }
}

export function populateUserMetadata(req, res) {
  const id = parseInt(req.params.id);
  if (users.has(id)) {
    users.get(id);
    res.status(200).send(`User ${id} deleted`);
  } else {
    res.status(404).send("User not found");
  }
}
