class Student < ActiveRecord::Base
  belongs_to :teacher
  # IF YOU INHERIT FROM ACTIVE RECORD, YOU DO NOT NEED TO WRITE THE METHODS BELOW:
  # # def initialize(name, mod, id=nil)
  # attr_accessor :name, :id, :mod

  # def initialize(input)
  #   # @name = name
  #   # @mod = mod
  #   # @id = id
  #   @name = input["name"]
  #   @mod = input["mod"]
  #   @id = input["id"]
  # end

  # #Create
  # def self.create_table
  #   sql = "CREATE TABLE students(id INTEGER PRIMARY KEY,
  #                               name TEXT,
  #                               mod INTEGER)"
  #   DB[:conn].execute(sql)
  # end

  # def self.insert_data(name, mod)
  #   sql = "INSERT INTO students(name, mod) VALUES(?,?)"
  #   DB[:conn].execute(sql, name, mod)
  # end
  # #R
  # def self.all
  #   # This is the query to run
  #   sql = "SELECT * FROM students"
  #   # Took the results from executing it and stored is a students array
  #   # [{}, {}, {}]
  #   students = DB[:conn].execute(sql)
  #   # Map over the hashes to covert to Ruby objects
  #   students.map do |student|
  #     # Student.new(student["name"], student["mod"], student["id"])
  #     Student.new(student)
  #   end
  # end

  # def self.search_by_id

  # end

  # def self.search_by_name
  # end

  # def self.search_by_mod
  # end
  # #U

  # #D
end
