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
  ]
});
