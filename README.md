# protobuf-demo
Create a proto file with .proto extension
Download protoc compiler and run command to generate javascript file.
Example command
Desktop/protoc-3.19.1-osx-x86_64/bin/protoc --java_out=Home/web/workspace/zohobooks_server/source/ Home/web/workspace/zohobooks_server/source/com/adventnet/zohobooks/proto/example.proto

This command will generate example_pb.js under the proto folder.
Run npm install google-protobuf to support the generated javascript file
