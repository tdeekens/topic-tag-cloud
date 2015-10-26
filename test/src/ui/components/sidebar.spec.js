import Sidebar from '../../../../src/javascript/ui/components/sidebar';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import chaiString from 'chai-string';

chai.should();
chai.use(chaiString);

function setup(props) {
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
  var
    propsWithTag = {
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
    },
    propsWithoutTag = {
      tag: {}
    };

  describe('render', () => {
    it('should assign correct classnames', () => {
      const
        { output } = setup(propsWithoutTag);

      output.props.className.should.contain('topic-tag-cloud-sidebar');
    });

    it('should give an indication whenever no tag is selected', () => {
      const
        { output } = setup(propsWithoutTag);

      output.props.children.props.className.should.contain('topic-tag-cloud-sidebar-information_empty');
    });

    it('should give an indication whenever a tag is selected', () => {
      const
        { output } = setup(propsWithTag);

      output.props.children.props.className.should.contain('topic-tag-cloud-sidebar-information');
    });

    it('should give an indication whenever a tag is selected', () => {
      const
        { output } = setup(propsWithTag);

      output.props.children.props.className.should.contain('topic-tag-cloud-sidebar-information');
      output.props.children.props.children.should.have.length(2);
    });
  });
});
