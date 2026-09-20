from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser


def check_robots(url):
    """
    Check whether a URL is allowed by robots.txt.
    """

    parsed = urlparse(url)

    if not parsed.scheme or not parsed.netloc:
        return {
            "url": url,
            "allowed": False,
            "error": "Invalid URL"
        }

    robots_url = f"{parsed.scheme}://{parsed.netloc}/robots.txt"

    rp = RobotFileParser()
    rp.set_url(robots_url)

    try:
        rp.read()

        allowed = rp.can_fetch("*", url)

        return {
            "url": url,
            "robots_url": robots_url,
            "allowed": allowed
        }

    except Exception as e:
        return {
            "url": url,
            "robots_url": robots_url,
            "allowed": False,
            "error": str(e)
        }