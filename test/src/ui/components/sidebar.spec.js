import Sidebar from '../../../../src/javascript/ui/components/sidebar';
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
        volume: 100,
        sentiment: {
          positive: 10,
          negative: 20,
          neutral: 70
        }
      }
    };

  const
    renderer = TestUtils.createRenderer();

  renderer.render(
    <Sidebar {...props} />
  );

  let
    output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('Sidebar', () => {
  describe('render', () => {
    it('should assign correct classnames', () => {
      const { output } = setup();

      output.props.className.should.contain('topic-tag-cloud-sidebar');
    });
  });
});
