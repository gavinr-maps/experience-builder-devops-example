import { getInitState } from 'jimu-for-test';
import { ContainerType } from 'jimu-core';
import { getWhetherWidgetVisible } from './runtime';

jest.mock('jimu-layouts/layout-runtime', () => {
  const actual = jest.requireActual('jimu-layouts/layout-runtime') as any;
  return {
    ...actual,
    searchUtils: {
      ...actual.searchUtils,
      getContentContainerInfo: (appConfig, id) => {
        const mockSets = [
          { id: 'dummyIdEmptyContainer', retVal: null },
          { id: 'dummyIdContainerTypeView', retVal: { id: 'dummyIdContainerTypeView', type: ContainerType.View } },
        ]
        return mockSets.find(i => i.id === id).retVal;
      },
    },
  }
});

describe('useWhetherWidgetVisible()', () => {
  describe('given empty containerInfo', () => {
    const id = 'dummyIdEmptyContainer';
    it('true is returned', () => {
      const initState = getInitState().merge({ appConfig: {} });
      const visible = getWhetherWidgetVisible(initState, id);
      expect(visible).toBeTruthy();
    })
  })
  describe('given containerInfo with type ContainerType.View', () => {
    const id = 'dummyIdContainerTypeView';
    describe('and given empty state.appRuntimeInfo.sectionNavInfos', () => {
      describe('and given appConfig.sections with target View included', () => {
        const initState = getInitState().merge({ appConfig: { sections: { dummySection1: { views: ['dummyIdContainerTypeView'] } } } });
        it('true is returned', () => {
          const visible = getWhetherWidgetVisible(initState, id);
          expect(visible).toBeTruthy();
        })
      })
      describe('and given appConfig.sections without target View included', () => {
        const initState = getInitState().merge({ appConfig: { sections: { dummySection1: { views: ['dummyIdNotContainerTypeView'] } } } });
        it('false is returned', () => {
          const visible = getWhetherWidgetVisible(initState, id);
          expect(visible).toBeFalsy();
        })
      })
    })
    describe('and given state.appRuntimeInfo.sectionNavInfos with target View included', () => {
      const initState = getInitState().merge({ appRuntimeInfo: { sectionNavInfos: { dummySection1: { currentViewId: 'dummyIdContainerTypeView' } } } });
      it('true is returned', () => {
        const visible = getWhetherWidgetVisible(initState, id);
        expect(visible).toBeTruthy();
      })
    })
    describe('and given state.appRuntimeInfo.sectionNavInfos without target View included', () => {
      const initState = getInitState().merge({ appRuntimeInfo: { sectionNavInfos: { dummySection1: { currentViewId: 'dummyIdNotContainerTypeView' } } } });
      it('false is returned', () => {
        const visible = getWhetherWidgetVisible(initState, id);
        expect(visible).toBeFalsy();
      })
    })
  })
});
