import buildMakeUser from './user.entity';
import Id from '../Id';
import sanitizeHtml from 'sanitize-html';
import validation from '../util';

const makeUser = buildMakeUser({ Id, validation, sanitize, });

export default makeUser;

function sanitize (text) {
  return sanitizeHtml(text, {
    allowedIframeHostnames: ['codesandbox.io', 'repl.it'],
  });
};
