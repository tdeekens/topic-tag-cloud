import Tag from '../../../../src/javascript/ui/components/tag';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import chaiString from 'chai-string';

chai.should();
chai.use(chaiString);

function setup() {
  const
    props = {
      tag: {
        id: 0,
        label: 'Foo',
        volume: 5,
        importance: 1,
        sentiment: 20
      },
      tagSelected: () => { return true; }
    };

  const
    renderer = TestUtils.createRenderer();

  renderer.render(
    <Tag {...props} />
  );

  let
    output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('Tag', () => {
  describe('render', () => {
    it('should corrently render the a tag label', () => {
      const { output } = setup();

      output.type.should.be.equal('div');
      output.props.children.should.equal('Foo');
    });

    it('should assign correct classnames', () => {
      const { output } = setup();

      output.props.className.should.contain('topic-tag-cloud-tags-tag');
      output.props.className.should.contain('importance-1');
      output.props.className.should.contain('sentiment-red');
    });
  });
});
