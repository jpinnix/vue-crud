export default {
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false
        },
        {
          type: 'select',
          url: 'crm/companies',
          list: {
            value: 'id',
            text: 'common_name',
            data: []
          },
          column: 'company_id',
          text: this.$t('fields.company'),
          name: 'company',
          apiObject: {
            name: 'company.common_name',
          },
        },
        {
          type: 'select',
          url: 'crm/people',
          list: {
            value: 'id',
            text: 'fullname',
            data: []
          },
          column: 'person_id',
          text: this.$t('fields.person'),
          name: 'person',
          apiObject: {
            name: 'person.fullname',
          },
        },
        {
          type: 'input',
          column: 'name',
          text: this.$t('fields.name'),
          required: false,
          name: 'name',
          required: false
        },
        {
          type: 'input',
          column: 'email',
          text: this.$t('fields.email'),
          required: false,
          name: 'email',
          multiedit: false,
          required: false
        },
        {
          type: 'input',
          column: 'phone',
          text: this.$t('fields.phone'),
          required: false,
          name: 'phone',
          multiedit: false,
          required: false
        },
        {
          text: this.$t('fields.tasks'),
          name: 'tasks',
          apiObject: {
            name: 'position_tasks',
            functions: ['listTasks']
          },
          details: false
        },
        {
          type: 'input',
          column: 'email_2',
          text: this.$t('fields.email_2'),
          required: false,
          name: 'email_2',
          multiedit: false,
          required: false
        },
        {
          type: 'input',
          column: 'phone_2',
          text: this.$t('fields.phone_2'),
          required: false,
          name: 'phone_2',
          multiedit: false,
          required: false
        },
        {
          type: 'input',
          column: 'phone_3',
          text: this.$t('fields.phone_3'),
          required: false,
          name: 'phone_3',
          multiedit: false,
          required: false
        },
        {
          type: 'input',
          column: 'comment',
          text: this.$t('fields.comment'),
          table: false,
          required: false
        },
      ]
    },
  }
}
