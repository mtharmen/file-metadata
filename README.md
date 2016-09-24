# API Basejump: File Metadata Microservice
## User stories:
1. I can submit a FormData object that includes a file upload.
2. When I submit something, I will receive the file size in bytes within the JSON response

### Example usage:

Upload a file at

```text
https://mtharmen-file-metadata.herokuapp.com
```
###Output:
```js
{"size": 258957}
```
will be returned at 

```text
https://mtharmen-file-metadata.herokuapp.com/analyze
```
