module.exports = {
  name: 'bud-plugin-blade',
  source: '@tinypixelco/bud-plugin-blade',
  description: 'Blade support',
  actions: [
    {
      action: 'addDependencies',
      repo: 'packagist',
      dev: false,
      pkgs: ['eftec/bladeone'],
    },
    {
      action: 'template',
      template: 'app/Block/Block.php.hbs',
      path: 'app/Block/Block.php',
    },
    {
      action: 'template',
      template: 'app/Block/Partials/Renderable.php.hbs',
      path: 'app/Block/Partials/Renderable.php',
    },
    {
      action: 'template',
      template: 'app/Block/Contracts/RenderableInterface.php.hbs',
      path: 'app/Block/Contracts/RenderableInterface.php',
    },
  ],
}
