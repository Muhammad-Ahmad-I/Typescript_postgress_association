'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors = require('cors');
const bodyParser = require('body-parser');
const std_details = require('../models/std_details');
const app = (0, express_1.default)();
app.use(cors());
bodyParser.urlencoded({ extended: true });
app.get('/ok', (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield std_details
      .findOne({ where: { id: 1 } })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
);
app.listen(3000, () => {
  console.log('server is running on port 3000');
});
