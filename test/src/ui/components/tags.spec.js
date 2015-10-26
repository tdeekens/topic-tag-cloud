import Tags from '../../../../src/javascript/ui/components/tags';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import chaiString from 'chai-string';

chai.should();
chai.use(chaiString);

function setup() {
  const
    props = {
      tags: [{
        id: 0,
        label: 'Foo',
        volume: 5,
        importance: 1,
        sentiment: 20
      }, {
        id: 1,
        label: 'Bar',
        volume: 3,
        importance: 2,
        sentiment: 40
      }],
      selectedTagId: '',
      tagSelected: () => { return true; }
    };

  const
    renderer = TestUtils.createRenderer();

  renderer.render(
    <Tags {...props} />
  );

  let
    output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('Tags', () => {
  describe('render', () => {
    it('should corrently render <Tag />s within it', () => {
      const { output } = setup();

      output.props.children.should.have.length(2);
    });

    it('should have the correct classname', () => {
      const { output } = setup();

      output.props.className.should.contain('topic-tag-cloud-tags');
    });
  });
});
