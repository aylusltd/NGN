try {
  var mechanic = require('ngn-mechanic');
  mechanic.shell();
} catch (e){
  require('colors');
  var Seq = require('seq'),
      read = require('read'),
      npm = require(require('path').join(process.env.APPDATA,'npm','node_modules','ngn','lib','cli-utils')),
      cfg = require(require('path').join(process.env.APPDATA,'npm','node_modules','ngn','bin','.config.json'));
  Seq()
    .seq(function(){
      console.log('ERROR: Cannot launch the NGN shell.'.red.bold);
      console.log('>> NGN Mechanic is not installed.\n'.magenta);
      read({
        prompt: 'Do you want to install NGN Mechanic now?',
        'default': 'y'
      },this.into('install'))
    })
    .seq(function(){
      if (this.vars.install.trim().toLowerCase() == 'y' || this.vars.install.trim().toLowerCase() == 'yes'){
        npm.installer({
          package: 'ngn-mechanic',
          name: 'Mechanic',
          registry: cfg.npmregistry
        },function(next){
          console.log('\n------------------------------------');
          console.log('| Please run '+'ngn configure'.magenta.bold+' before  |\n| opening the shell again.         |');
          console.log('------------------------------------');
          next();
        });
        /*npm.load({
          registry: cfg.npmregistry,
          global: true
        },function(){
          npm.commands.install('ngn-mechanic',function(_err,data){
            if (_err){
              console.log('\nError installing NGN Mechanic:'.red.bold);
              console.log(('('+_err.code+') ').blue.bold+_err.message);
            } else {
              var npm2 = require('npm');
              npm2.load({},function(){
                npm2.commands.link('ngn-mechanic',function(__err,_data){
                  console.log('Error installing NGN Mechanic:'.red);
                  console.dir(_err);
                });
              });
             console.log('no err');
            }
          });
        });*/
      } else {
        process.exit(1);
      }
    });
}