# frozen_string_literal: true

ruby file: ".ruby-version"

source "https://rubygems.org"

group :quality do
  gem "caliber", "~> 0.50"
  gem "git-lint", "~> 7.0"
  gem "reek", "~> 6.3", require: false
  gem "simplecov", "~> 0.22", require: false
end

group :development do
  gem "rake", "~> 13.1"
end

group :test do
  gem "capybara", "~> 3.39"
  gem "cuprite", "~> 0.14"
  gem "guard-rspec", "~> 4.7", require: false
  gem "launchy", "~> 2.5"
  gem "rack-test", "~> 2.1"
  gem "rackup", "~> 2.1"
  gem "refinements", "~> 12.0"
  gem "rspec", "~> 3.12"
end

group :tools do
  gem "amazing_print", "~> 1.5"
  gem "debug", "~> 1.9"
  gem "repl_type_completor", "~> 0.1"
end
