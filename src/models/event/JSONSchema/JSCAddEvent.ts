import { IJSONSchemaType } from '../../common/IJSONSchemaType';

export const JSCAddEvent: IJSONSchemaType = {
  definitions: {
    IUsersItem: {
      properties: {
        id: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        real_name: {
          type: 'string'
        }
      },
      required: ['id', 'name', 'real_name'],
      type: 'object'
    }
  },
  properties: {
    body: {
      properties: {
        desc: {
          type: 'string',
          default: ''
        },
        guests: {
          items: {
            $ref: '#/definitions/IUsersItem'
          },
          type: 'array'
        },
        last_order: {
          format: 'date-time',
          type: 'string'
        },
        owner: {
          $ref: '#/definitions/IUsersItem'
        },
        private: {
          type: 'boolean',
          default: false
        },
        title: {
          type: 'string'
        }
      },
      required: ['owner', 'title'],
      type: 'object'
    }
  },
  required: ['body'],
  type: 'object'
};
