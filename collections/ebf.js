EBFs = new Mongo.Collection("EBFs");

EBF = Astro.Class({
  name: 'EBF',
  collection: EBFs,
  fields: {
    sourceId: {
      type: 'string'
    },
    sourceType: {
      type: 'string'
    },
    ownerGroup: {
      type: 'string',
      default: 'ADJUDICATOR'
    },
    createdBy: {
      type: 'string',
      default: 'API'
    },
    updatedBy: {
      type: 'string'
    },
    bktOrder: {
      type: 'object',
      default: {}
    },
    'bktOrder.name': {
      type: 'string',
      default: ''
    },
    'bktOrder.summary': {
      type: 'string',
      default: ''
    },
    'bktOrder.orderDate': {
      type: 'date',
       default: null
    },
    'hasActions': {
      type: 'boolean',
      default: true
    }
    ,
    'orderDate': {
      type: 'date',
       default: null
    }
  }
});

EBF.addBehavior('timestamp', {
  hasCreatedField: true,
  createdFieldName: 'createdAt',
  hasUpdatedField: true,
  updatedFieldName: 'updatedAt'
});

EBF.addValidators({
  sourceType: [
    Validators.required(),
    Validators.string(),
  ],
  sourceId: [
    Validators.required(),
    Validators.string(),
    Validators.unique()
  ]
});
