import { postManagerStore } from './baseStore';
import { usersStore } from './system';
import { MenusStore, ProjectsStore } from './publicStore';
import { menusState } from './states';

const store = {
  postManagerStore,
  MenusStore,
  ProjectsStore,
  usersStore,
  menusState
};

export default store;