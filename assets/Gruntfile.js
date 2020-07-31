module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),


	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		},
	},

	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/main.js'
			],
			dest: '../markup/js/main.min.js'
		},
	},
	

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/main.min.js': ['dist/js/main.js'],
				'../markup/js/main-top.min.js': ['dist/js/main-top.js'],
				'../markup/js/text-page.min.js': ['dist/js/plugin/text-page.js'],
				'../markup/js/news.min.js': ['dist/js/plugin/news.js'],
				'../markup/js/review.min.js': ['dist/js/plugin/review.js'],
				'../markup/js/map-of-site.min.js': ['dist/js/plugin/map-of-site.js'],
				'../markup/js/FAQ.min.js': ['dist/js/plugin/FAQ.js'],
				'../markup/js/about-company.min.js': ['dist/js/plugin/about-company.js'],
				'../markup/js/all-service.min.js': ['dist/js/plugin/all-service.js'],
				'../markup/js/internal.min.js': ['dist/js/plugin/internal.js'],
				'../markup/js/price.min.js': ['dist/js/plugin/price.js'],
				'../markup/js/doctors.min.js': ['dist/js/plugin/doctors.js'],
				'../markup/js/header.min.js': ['dist/js/plugin/header.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/one-service.min.js': ['dist/js/plugin/one-service.js'],
				'../markup/js/circletype.min.js': ['dist/js/plugin/circletype.js'],
				'../markup/js/contact.min.js': ['dist/js/plugin/contact.js'],
				'../markup/js/go-to-Top.min.js': ['dist/js/plugin/go-to-Top.js'],
				'../markup/js/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
				'../markup/js/jquery.arctext.min.js': ['dist/js/plugin/jquery.arctext.js'],
				'../markup/js/jquery-ui.min.js': ['dist/js/plugin/jquery-ui.js'],
			},
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/**/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '**/*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
					templates: '<%= fixturesPath %>/*.html',
					layout: {
						header: '<%= fixturesPath %>/templates/header.html',
						mainheader: '<%= fixturesPath %>/templates/mainheader.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
						popUp: '<%= fixturesPath %>/templates/popUp.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');




// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'htmlbuild', 'watch', 'sass']);



};
