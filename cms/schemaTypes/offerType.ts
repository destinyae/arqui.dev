import {defineField, defineType} from 'sanity'

export const offerType = defineType({
  name: 'offerList',
  title: 'Offers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Offer Name',
      type: 'string',
    }),
    defineField({
        name: 'headline',
        title: 'Offer Headline',
        type: 'string',
      }),
    defineField({
      name: 'description',
      title: 'Offer Description',
      type: 'text',
      })
  ],
})