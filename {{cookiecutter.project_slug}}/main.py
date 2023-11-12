import asyncio
from streamjam import StreamJam

app = StreamJam(
    name="{{cookiecutter.project_slug}}"
)


if __name__ == '__main__':
    asyncio.run(app.serve())
