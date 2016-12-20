import { VisNetworkService } from './vis-network.service';

describe('VisNetworkService Tests', () => {

  let visNetworkService: VisNetworkService;

  beforeEach(() => {
    visNetworkService = new VisNetworkService();
  });

  it('returns undefined when network id is unknown', () => {
    let selection = visNetworkService.getSelection('unknown');
    expect(selection).toBeUndefined();
    let selectedNodes = visNetworkService.getSelectedNodes('unknown');
    expect(selectedNodes).toBeUndefined();
    let selectedEdges = visNetworkService.getSelectedEdges('unknown');
    expect(selectedEdges).toBeUndefined();
  });

  it('throws no error when the network does not exist', () => {
    visNetworkService.destroy('unknown');
  });

  it('throws error when network already exists', () => {
    let dummyElement = document.createElement('div');
    visNetworkService.create('knownNetwork', dummyElement, { nodes: [], edges: [] });
    expect(() => visNetworkService.create('knownNetwork', dummyElement, { nodes: [], edges: [] })).toThrowError();
  });

  it('returns false when network does not exist', () => {
    expect(visNetworkService.on('unknown', 'click')).toBe(false);
    expect(visNetworkService.once('unknown', 'click')).toBe(false);
    visNetworkService.off('unknown', 'click');
    expect(visNetworkService.isCluster('unknown', 'nodeId')).toBe(false);
  });

  it('throws error when network does not exist', () => {
    expect(() => visNetworkService.setData('unknown', { nodes: [], edges: [] })).toThrowError();
    expect(() => visNetworkService.setOptions('unknown', { nodes: [], edges: [] })).toThrowError();
    expect(() => visNetworkService.selectNodes('unknown', [])).toThrowError();
    expect(() => visNetworkService.selectNodes('unknown', [], false)).toThrowError();
    expect(() => visNetworkService.unselectAll('unknown')).toThrowError();
    expect(() => visNetworkService.fit('unknown')).toThrowError();
    expect(() => visNetworkService.fit('unknown', { animation: true })).toThrowError();
    expect(() => visNetworkService.redraw('unknown')).toThrowError();
    expect(() => visNetworkService.enableEditMode('unknown')).toThrowError();
    expect(() => visNetworkService.addEdgeMode('unknown')).toThrowError();
    expect(() => visNetworkService.disableEditMode('unknown')).toThrowError();
    expect(() => visNetworkService.deleteSelected('unknown')).toThrowError();
    expect(() => visNetworkService.cluster('unknown')).toThrowError();
    expect(() => visNetworkService.cluster('unknown', {})).toThrowError();
    expect(() => visNetworkService.clusterByConnection('unknown', 42, {})).toThrowError();
    expect(() => visNetworkService.clusterByConnection('unknown', 42)).toThrowError();
    expect(() => visNetworkService.clusterByHubsize('unknown', 42, {})).toThrowError();
    expect(() => visNetworkService.clusterByHubsize('unknown', 42)).toThrowError();
    expect(() => visNetworkService.clusterOutliers('unknown', {})).toThrowError();
    expect(() => visNetworkService.clusterOutliers('unknown')).toThrowError();
    expect(() => visNetworkService.findNode('unknown', 42)).toThrowError();
    expect(() => visNetworkService.getClusteredEdges('unknown', 42)).toThrowError();
    expect(() => visNetworkService.getBaseEdge('unknown', 42)).toThrowError();
    expect(() => visNetworkService.updateEdge('unknown', 42)).toThrowError();
    expect(() => visNetworkService.updateEdge('unknown', 42)).toThrowError();
    expect(() => visNetworkService.updateClusteredNode('unknown', 42)).toThrowError();
    expect(() => visNetworkService.updateClusteredNode('unknown', 42, {})).toThrowError();
    expect(() => visNetworkService.getNodesInCluster('unknown', 42)).toThrowError();
    expect(() => visNetworkService.openCluster('unknown', 'nodeId', { releaseFunction: null })).toThrowError();
    expect(() => visNetworkService.openCluster('unknown', 'nodeId')).toThrowError();
    expect(() => visNetworkService.canvasToDOM('unknown', 'nodeId')).toThrowError();
    expect(() => visNetworkService.DOMtoCanvas('unknown', 'nodeId')).toThrowError();
  });

  it('returns -1 when network does not exist', () => {
    expect(visNetworkService.getSeed('unknown')).toBe(-1);
  });
});
