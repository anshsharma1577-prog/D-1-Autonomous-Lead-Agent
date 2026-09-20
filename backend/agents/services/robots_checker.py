from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser


def robots_checker(url):

    parsed = urlparse(url)

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