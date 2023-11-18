# frozen_string_literal: true

require "bundler/setup"
require "git/lint/rake/register"

Git::Lint::Rake::Register.call

desc "Run code quality checks"
task code_quality: %i[git_lint]

task default: %i[code_quality]
