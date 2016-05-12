// Generated by CoffeeScript 1.3.3
var Cube,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

return Cube = (function(_super) {

  __extends(Cube, _super);

  Cube.prototype.attribs = ['position', 'normal', 'barycentric'];

  Cube.prototype.pointers = [
    {
      name: 'position',
      size: 3,
      offset: 0,
      stride: 9
    }, {
      name: 'normal',
      size: 3,
      offset: 3,
      stride: 9
    }, {
      name: 'barycentric',
      size: 3,
      offset: 6,
      stride: 9
    }
  ];

  function Cube(gl, s) {
    var vertices;
    this.gl = gl;
    if (s == null) {
      s = 1;
    }
    Cube.__super__.constructor.call(this);
    this.size = 6 * 6;
    vertices = [-s, -s, -s, 0, 0, -1, 1, 0, 0, -s, s, -s, 0, 0, -1, 0, 1, 0, s, s, -s, 0, 0, -1, 0, 0, 1, s, -s, -s, 0, 0, -1, 1, 0, 0, -s, -s, -s, 0, 0, -1, 0, 1, 0, s, s, -s, 0, 0, -1, 0, 0, 1, s, s, s, 0, 0, 1, 1, 0, 0, -s, s, s, 0, 0, 1, 0, 1, 0, -s, -s, s, 0, 0, 1, 0, 0, 1, s, s, s, 0, 0, 1, 1, 0, 0, -s, -s, s, 0, 0, 1, 0, 1, 0, s, -s, s, 0, 0, 1, 0, 0, 1, -s, s, -s, 0, 1, 0, 1, 0, 0, -s, s, s, 0, 1, 0, 0, 1, 0, s, s, s, 0, 1, 0, 0, 0, 1, s, s, -s, 0, 1, 0, 1, 0, 0, -s, s, -s, 0, 1, 0, 0, 1, 0, s, s, s, 0, 1, 0, 0, 0, 1, s, -s, s, 0, -1, 0, 1, 0, 0, -s, -s, s, 0, -1, 0, 0, 1, 0, -s, -s, -s, 0, -1, 0, 0, 0, 1, s, -s, s, 0, -1, 0, 1, 0, 0, -s, -s, -s, 0, -1, 0, 0, 1, 0, s, -s, -s, 0, -1, 0, 0, 0, 1, -s, -s, -s, -1, 0, 0, 1, 0, 0, -s, -s, s, -1, 0, 0, 0, 1, 0, -s, s, s, -1, 0, 0, 0, 0, 1, -s, s, -s, -1, 0, 0, 1, 0, 0, -s, -s, -s, -1, 0, 0, 0, 1, 0, -s, s, s, -1, 0, 0, 0, 0, 1, s, s, s, 1, 0, 0, 1, 0, 0, s, -s, s, 1, 0, 0, 0, 1, 0, s, -s, -s, 1, 0, 0, 0, 0, 1, s, s, s, 1, 0, 0, 1, 0, 0, s, -s, -s, 1, 0, 0, 0, 1, 0, s, s, -s, 1, 0, 0, 0, 0, 1];
    this.uploadList(vertices);
  }

  return Cube;

})(require('drawable'));