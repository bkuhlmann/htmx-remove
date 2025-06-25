# frozen_string_literal: true

ruby file: ".ruby-version"

source "https://rubygems.org"

group :quality do
  gem "caliber", "~> 0.79"
  gem "git-lint", "~> 9.0"
  gem "reek", "~> 6.5", require: false
  gem "simplecov", "~> 0.22", require: false
end

group :development do
  gem "rake", "~> 13.3"
end

group :test do
  gem "capybara", "~> 3.40"
  gem "cuprite", "~> 0.15"
  gem "launchy", "~> 3.0"
  gem "rack-test", "~> 2.1"
  gem "rackup", "~> 2.1"
  gem "refinements", "~> 13.3"
  gem "rspec", "~> 3.13"
end

group :tools do
  gem "amazing_print", "~> 1.8"
  gem "debug", "~> 1.10"
  gem "irb-kit", "~> 1.1"
  gem "repl_type_completor", "~> 0.1"
end
