export const UserActionType = {
  START_COMPONENT_TREE_INSPECTION: 'START_COMPONENT_TREE_INSPECTION',
  SELECT_NODE: 'SELECT_NODE',
  SEARCH_NODE: 'SEARCH_NODE',
  HIGHLIGHT_NODE: 'HIGHLIGHT_NODE',
  CLEAR_HIGHLIGHT: 'CLEAR_HIGHLIGHT',
  OPEN_CLOSE_TREE: 'OPEN_CLOSE_TREE',
  UPDATE_NODE_STATE: 'UPDATE_NODE_STATE',
  GET_DEPENDENCIES: 'GET_DEPENDENCIES',
  UPDATE_PROPERTY: 'UPDATE_PROPERTY',
  RENDER_ROUTER_TREE: 'RENDER_ROUTER_TREE'
};

export const BackendActionType = {
  COMPONENT_TREE_CHANGED: 'COMPONENT_TREE_CHANGED',
  CLEAR_SELECTIONS: 'CLEAR_SELECTIONS',
  RENDER_ROUTER_TREE: 'RENDER_ROUTER_TREE'
};
