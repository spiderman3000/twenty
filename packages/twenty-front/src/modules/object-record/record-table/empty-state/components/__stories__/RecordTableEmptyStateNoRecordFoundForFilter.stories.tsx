import { Meta, StoryObj } from '@storybook/react';

import { RecordTableContextProvider } from '@/object-record/record-table/components/RecordTableContextProvider';
import { RecordTableEmptyStateNoRecordFoundForFilter } from '@/object-record/record-table/empty-state/components/RecordTableEmptyStateNoRecordFoundForFilter';
import { ComponentDecorator } from 'twenty-ui/testing';
import { ContextStoreDecorator } from '~/testing/decorators/ContextStoreDecorator';
import { I18nFrontDecorator } from '~/testing/decorators/I18nFrontDecorator';
import { MemoryRouterDecorator } from '~/testing/decorators/MemoryRouterDecorator';
import { ObjectMetadataItemsDecorator } from '~/testing/decorators/ObjectMetadataItemsDecorator';
import { RecordTableDecorator } from '~/testing/decorators/RecordTableDecorator';
import { SnackBarDecorator } from '~/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';

const meta: Meta = {
  title:
    'Modules/ObjectRecord/RecordTable/RecordTableEmptyStateNoRecordFoundForFilter',
  component: RecordTableEmptyStateNoRecordFoundForFilter,
  decorators: [
    (Story) => (
      <RecordTableContextProvider
        recordTableId="persons"
        viewBarId="view-bar"
        objectNameSingular="person"
      >
        <Story />
      </RecordTableContextProvider>
    ),
    ComponentDecorator,
    MemoryRouterDecorator,
    RecordTableDecorator,
    ContextStoreDecorator,
    SnackBarDecorator,
    ObjectMetadataItemsDecorator,
    I18nFrontDecorator,
  ],
  parameters: {
    recordTableObjectNameSingular: 'person',
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof RecordTableEmptyStateNoRecordFoundForFilter>;

export const Default: Story = {};
