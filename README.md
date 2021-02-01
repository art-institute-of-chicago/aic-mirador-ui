![Art Institute of Chicago](https://raw.githubusercontent.com/Art-Institute-of-Chicago/template/master/aic-logo.gif)

# Mirador 3 Custom UI Plugin

A set of plugins used to customize the Art Institute of Chicago's (AIC) Mirador 3 implementation. 

## Features

Currently AIC's application of Mirador is for viewing book-like objects from the collection. Using the [configuration](https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js) and [theme](https://github.com/ProjectMirador/mirador/wiki/M3-Theming-Mirador) settings, the UI was simplified. From there, plugin files were created to provide the following:

* Removal of default navigation
* Addition of custom navigation buttons
* Removal of thumbnail background color
* Custom zoom buttons
* Custom zoom restrictions
* Addition of a loader element

## Requirements

* [npm](https://www.npmjs.com/)

## Installing

To run a demo:

```shell
# Clone the repo
git clone https://github.com/art-institute-of-chicago/aic-mirador-ui.git

# CD into the repo directory
cd aic-mirador-ui/

# Install packages
npm install

# Start Mirador demo
npm start

# View
navigate to http://localhost:3000/ in your browser to view the demo
```

## Developing

Development of this plugin was completed by using the following resources:

* [Mirador Wiki](https://github.com/ProjectMirador/mirador/wiki)
* [M3 Creating a Mirador plugin](https://github.com/ProjectMirador/mirador/wiki/M3---Creating-a-Mirador-plugin)
* [Mirador 3 plugins](https://github.com/ProjectMirador/mirador/wiki/Mirador-3-plugins)
* [Openseadragon Documentation](https://openseadragon.github.io/docs/)
* [Material UI Documentation](https://material-ui.com/)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
* [The wonderful IIIF/Mirador community](https://iiif.io/community/)

## Contributing

Mirador's development, design, and maintenance is driven by community needs and ongoing feedback and discussion. Join us at our regularly scheduled community calls, on [IIIF slack #mirador](http://bit.ly/iiif-slack), or the [mirador-tech](https://groups.google.com/forum/#!forum/mirador-tech) and [iiif-discuss](https://groups.google.com/forum/#!forum/iiif-discuss) mailing lists. To suggest features, report bugs, and clarify usage, please submit a GitHub issue.

## Licensing

This project is licensed under the [GNU Affero General Public License
Version 3](LICENSE).
